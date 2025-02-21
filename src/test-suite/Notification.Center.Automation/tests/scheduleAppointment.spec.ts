import { test, expect, request } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { NotificationCenterPage } from '../pages/notificationCenterPage'
import testData from '../test-data/testData.json'

test.describe('login todoist', () => {
    let loginPage: LoginPage
    let notificationCenterPage: NotificationCenterPage

    test.beforeEach(async ({ page, request }) => {
        loginPage = new LoginPage(page)
        notificationCenterPage = new NotificationCenterPage(page, request)
    })

    test('Enter credentials to login the application', async ({page}) => {
        await page.goto(testData.webUrl)
        await loginPage.enterCredentials()
        await notificationCenterPage.scheduleAnAppointment()
        await page.waitForTimeout(5000);
        await notificationCenterPage.clickNextAndSaveBtn()
    })
})