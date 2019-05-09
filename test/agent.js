import ApiAgent from '../src/mock/api_agent'
import assert from 'assert'

describe('ApiAgent', function() {
  describe('#get()', function() {
    it('should return agent list', function() {
      const agents = ApiAgent.get()
      assert(agents.length > 0)
    });
  });
  describe('#deleteResource()', function() {
    it('should delete first agent first resource', function() {
      let agents = ApiAgent.get()
      const [agent] = agents
      const [resource] = agent.resources
      ApiAgent.deleteResource(agent.id, resource)

      agents = ApiAgent.get()
      const found = agents.find(a => a.id === agent.id)
      assert(!found.resources.includes(resource))
    });
  });
  describe('#addResources()', function() {
    it('should add resources to first agent', function() {
      let agents = ApiAgent.get()
      const [agent] = agents
      const resources = ['R1', 'R2']
      ApiAgent.addResources(agent.id, resources)

      agents = ApiAgent.get()
      const found = agents.find(a => a.id === agent.id)
      assert(found.resources.includes(...resources))
    });
  });
});
