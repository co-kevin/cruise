import Agents from './agents'
import Agent from '../entity/agent'

const STORAGE_KEY_AGENTS = 'STORAGE_KEY_AGENTS'

function saveAll (agents) {
  const json = JSON.stringify(agents)
  localStorage.setItem(STORAGE_KEY_AGENTS, json)
  return json
}

function getAll () {
  let json = localStorage.getItem(STORAGE_KEY_AGENTS)
    if (!json) {
      json = saveAll(Agents)
    }
    return JSON.parse(json).map(obj => new Agent(obj))
}

function findById(id) {
  const agent = getAll().find(a => {
    return a.id === id  
  })
  return agent
}

function save (agent) {
  if (!agent) return

  if (agent.id) {
    const agents = getAll()
    agents.forEach(a => {
      if (a.id === agent.id) {
        a.resources = agent.resources
      }
    })
    saveAll(agents)
  }
}

export default class ApiAgent {
  static get () {
    return getAll()
  }

  static deleteResource(agentId, resourceName) {
    let agent = findById(agentId)
    if (!agent) return

    agent.deleteResource(resourceName)
    save(agent)
  }

  static addResources(agentId, resources) {
    let agent = findById(agentId)
    if (!agent) return

    agent.addResources(resources)
    save(agent)
  }
}
