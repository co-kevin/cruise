import ApiAgent from './mock/api_agent'

class AgentCtrl {
  static deleteResource (agentId, resourceName) {
    ApiAgent.deleteResource(agentId, resourceName)
    renderAgents(ApiAgent.get())
  }
}

export function renderAgents (agents) {
  const agentList = document.getElementById('agent-list')
  agentList.innerHTML = ''
  agents.forEach(agent => {
    agentList.appendChild(agent.render())
  })
}

window.AgentCtrl = AgentCtrl
window.onload = () => {
  renderAgents(ApiAgent.get())
}
