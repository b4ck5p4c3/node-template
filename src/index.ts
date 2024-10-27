import { pino } from "pino";

const log = pino({ name: "main" });

log.info("Hi there");
log.error("This is an error");
