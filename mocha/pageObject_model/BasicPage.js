export class BasicPage {
    constructor() {}

    async openPage(url) {
        await browser.setTimeout({
            pageLoad: 8000,
            implicit: 8000,
            script: 8000,
        });
        await browser.url(url);
        await browser.maximizeWindow();
    }

    async closeBrowser() {
        await browser.deleteSession();
    }
}

export let BasicDriver = new BasicPage();
