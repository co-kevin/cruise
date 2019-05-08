import AgentTemplate from './components/agent.html'
import Agents from './mock/agents'

class Agent {
  constructor(raw) {
    this.id = raw.id
    this.os = raw.os
    this.host = raw.host
    this.status = raw.status
    this.ipaddr = raw.ipaddr
    this.path = raw.path
    this.resources = raw.resources
  }

  deleteResource (resource) {
    const index = this.resources.findIndex(resource)
    if (index) {
      this.resources.splice(index, 1)
    }
  }

  addResource (resource) {
    this.resources.push(resource)
  }

  render () {
    const AgentDiv = document.createElement('div')
    AgentDiv.innerHTML = AgentTemplate
    
    const os = AgentDiv.querySelector('[name=os]')
    const host = AgentDiv.querySelector('[name=host]')
    const status = AgentDiv.querySelector('[name=status]')
    const ipaddr = AgentDiv.querySelector('[name=ipaddr]')
    const path = AgentDiv.querySelector('[name=path]')
    const resources = AgentDiv.querySelector('[name=resources]')

    os.classList.add(this.os)
    host.innerHTML = this.host
    status.innerHTML = this.status
    ipaddr.innerHTML = this.ipaddr
    path.innerHTML = this.path
    
    let resourcesHTML = ''
    this.resources.forEach(r => {
      resourcesHTML += `
      <div class="resource" name="resource">
        <span class="name">${r}</span>
        <i class="icon-trash" onclick="removeResource(this)"></i>
      </div>
      `
    })
    resources.innerHTML = resourcesHTML

    return AgentDiv
  }
}

export function renderAgents (agents) {
  const agentList = document.getElementById('agent-list')
  agents.forEach(raw => {
    const agent = new Agent(raw)
    agentList.appendChild(agent.render())
  })
}

window.onload = () => {
  renderAgents(Agents)
}
