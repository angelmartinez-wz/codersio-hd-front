import {Page, Locator} from '@playwright/test'
import testData from '../test-data/testData.json'

export class LoginPage {
    mainLoginBtn: Locator
    emailTxt: Locator
    passwordTxt: Locator
    loginBtn: Locator

    constructor(page: Page){
        this.mainLoginBtn = page.locator('button[type=button]').nth(1)
        this.emailTxt = page.locator('#email')
        this.passwordTxt = page.locator('#password')
        this.loginBtn = page.locator('[type=submit]')
    }

    async clickMainLoginBtn(){
        await this.mainLoginBtn.click()
    }

    async enterCredentials(){
        this.clickMainLoginBtn()
        await this.emailTxt.fill(testData.email)
        await this.passwordTxt.fill(testData.password)
        await this.loginBtn.click()
    }
}