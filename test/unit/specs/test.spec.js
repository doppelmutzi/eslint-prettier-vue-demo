import Vue from "vue";
import { shallow } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        expect(msg).toMatch(msg);
    });
});