import { DataService } from "./data.service"

describe("DataService",()=>{
    let service:DataService=new DataService();

    beforeEach(async()=>{
    })
    
    it("GIVEN string 'hello' THEN expect 'olleh' as result",()=>{
        
        const result= service.getReverseString("hello");
        expect(result).toBe("olleh");
    })
})