import ApiAgent from './mock/api_agent'

let currentDialogAgentId

class AgentCtrl {
  static deleteResource (agentId, resourceName) {
    ApiAgent.deleteResource(agentId, resourceName)
    renderAgents(ApiAgent.get())
  }

  static addResources () {
    const input = document.getElementById('resource-input')
    if (input.value) {
      let resources = input.value.split(',')
      resources = resources.map(item => item.trim())
      ApiAgent.addResources(currentDialogAgentId, resources)
      renderAgents(ApiAgent.get())
    }
    window.Dialog.close()
  }

  static openAddResourceDialog (agentId) {
    document.getElementById('resource-input').value = ''
    currentDialogAgentId = Number(agentId)
    window.Dialog.open()
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
