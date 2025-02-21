import { test, expect, request } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { NotificationCenterPage } from '../pages/notificationCenterPage'
import testData from '../test-data/testData.json'

test.describe('Notification Center', () => {
    let loginPage: LoginPage
    let notificationCenterPage: NotificationCenterPage

    test.beforeEach(async ({ page, request }) => {
        loginPage = new LoginPage(page)
        notificationCenterPage = new NotificationCenterPage(page, request)
        await notificationCenterPage.generateToken()
        // await notificationCenterPage.deleteErrors()
    })

    test('Schedule an appointment in Notification Center', async ({page, request}) => {
        await page.goto(testData.webUrl)
        await loginPage.enterCredentials()
        await notificationCenterPage.scheduleAnAppointment()
        await page.waitForTimeout(5000);
        await notificationCenterPage.clickNextBtn()
        await notificationCenterPage.verifyNewErrorsStatus()
        await notificationCenterPage.clickSaveBtn()
        await notificationCenterPage.verifyScheduleStatus()
        await notificationCenterPage.deleteErrors()
    })

    test('Cancel an appointment in Notification Center', async ({page, request}) => {
        await page.goto(testData.webUrl)
        await loginPage.enterCredentials()
        await notificationCenterPage.scheduleAnAppointment()
        await page.waitForTimeout(5000);
        await notificationCenterPage.clickNextBtn()
        await notificationCenterPage.verifyNewErrorsStatus()
        await notificationCenterPage.clickSaveBtn()
        await notificationCenterPage.verifyScheduleStatus()
        await notificationCenterPage.clickCancelAppointmentBtn()
        await notificationCenterPage.verifyPendingStatus()
        await notificationCenterPage.deleteErrors()
    })
})