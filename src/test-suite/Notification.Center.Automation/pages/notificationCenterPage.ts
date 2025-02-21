import { Page, Locator, APIRequestContext, expect } from '@playwright/test'
import testData from '../test-data/testData.json'

export class NotificationCenterPage {
    page: Page
    scheduleBtn: Locator
    nextBtn: Locator
    saveBtn: Locator
    dealerBtn: Locator
    request: APIRequestContext
    successText: Locator
    token: string | null = null

    constructor(page: Page, request: APIRequestContext){
        this.page = page
        this.request = request
        this.scheduleBtn = page.locator('div:nth-child(2) > div:nth-child(2) > button:nth-child(2)')
        this.nextBtn = page.locator('button[data-testid="btn-next"]')
        this.saveBtn = page.locator('button[data-testid="btn-save-appointment"]')
        this.dealerBtn = page.locator('input[data-testid="rd-dealership-U5YBHVlLdPDb"]')
        this.successText = page.locator('button').filter({ hasText: 'Appointment Updated!' })
        this.generateToken()
    }

    async generateToken() {
        const response = await this.request.post(
            testData.generateTokenUrl,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    email: testData.email,
                    password: testData.password
                },
            }
        );

        if (response.status() === 200) {
            const body = await response.json()
            this.token = body.token
        } else {
            console.error('Login failed with status:', response.status())
        }
    }

    async scheduleAnAppointment(){
        await this.scheduleBtn.click()
        await this.dealerBtn.waitFor({ state: 'visible' })
        await this.randomErrors()
    }

    async clickNextAndSaveBtn(){
        await this.nextBtn.click()
        await this.saveBtn.click()
        await expect(this.successText).toBeVisible({ timeout: 5000 });
        await this.deleteErrors()
    }

    async randomErrors() {
        if (!this.token) {
            console.error('Token is not available');
            return
        }

        const response = await this.request.post(
            testData.apiUrl,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`,
            },
            data: {
              query: `
                mutation {
                  randomErrors {
                    code
                    fault
                    severity
                  }
                }
              `
            },
          }
        );
        if (response.status() === 200) {
            const body = await response.json()
        } else {
            console.error('Request failed with status:', response.status())
        }
      }

      async deleteErrors() {
        if (!this.token) {
            console.error('Token is not available');
            return
        }

        const response = await this.request.post(
            testData.apiUrl,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            },
            data: {
              query: `
                mutation {
                    deleteErrors
                }
              `
            },
          }
        );
        if (response.status() === 200) {
            const body = await response.json()
        } else {
            console.error('Request failed with status:', response.status())
        }
      }
}