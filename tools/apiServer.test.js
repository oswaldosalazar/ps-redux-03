const rewire = require("rewire")
const apiServer = rewire("./apiServer")
const createSlug = apiServer.__get__("createSlug")
// @ponicode
describe("createSlug", () => {
    test("0", () => {
        let callFunction = () => {
            createSlug("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createSlug("ELIO")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createSlug("ELIO@EXAMPLE.COM")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createSlug("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createSlug("elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createSlug(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
