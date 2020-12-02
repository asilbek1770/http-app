import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

const init = () => {
    Sentry.init({
        dsn: "https://7bdd029ff73f4c9f8fd86b3fe408db0a@o481896.ingest.sentry.io/5531272",
        integrations: [
            new Integrations.BrowserTracing(),
        ],
        tracesSampleRate: 1.0,
    });
}
const log = (error) => {
    Sentry.captureException(error)
}

export default {
    log,init
}