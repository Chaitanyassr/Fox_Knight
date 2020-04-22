const Social = artifacts.require("./Social.sol");
require('chai')
 .use(require('chai-as-promised'))
 .should()

 contract('Social' , (accounts) => {
    let Social

before(async () => {
	Social = await Social.deployed()
})

    describe('deployment', async () => {
it('deploys successfully', async () => {


	const address = await Social.address
	assert.notEqual(address, 0x0)
	assert.notEqual(address, '')
	assert.notEqual(address, null)
	assert.notEqual(address, undefined)
})
it('has a name', async () => {
	const name = await Social.name()
	assert.equal(name, 'Fox_Knight')
})
    })
 })