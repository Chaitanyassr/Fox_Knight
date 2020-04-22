const Social = artifacts.require("./Social.sol");
require('chai')
 .use(require('chai-as-promised'))
 .should()

 contract('Social' , (accounts) => {
    let Social

    describe('deployment', async () => {
it('deploys successfully', async () => {

	Social = await Social.deployed()
	const address = await Social.address
	assert.notEqual(address, 0x0)
	assert.notEqual(address, '')
	assert.notEqual(address, null)
	assert.notEqual(address, undefined)
})
    })
 })