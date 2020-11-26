import { createApp } from "vue";
import constants from "@/libs/constants";
import enums from "@/libs/enums";

const app = createApp({});

app.config.globalProperties.$constants = constants;
app.config.globalProperties.$enums = enums;

app.use(constants);
app.use(enums);
