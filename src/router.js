import AgentView from './views/agent/agent.html'
import './views/agent/agent-ctrl'

// default router view is AgentView
const routerView = document.getElementById('router-view')
routerView.innerHTML = AgentView
