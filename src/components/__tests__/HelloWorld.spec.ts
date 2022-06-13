import HelloWorld from "@/components/HelloWorld.vue";
import { render } from "@testing-library/vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const { getByText } = render(HelloWorld, {
      props: { msg: "Hello Vitest" },
    });

    getByText("Hello Vitest");
  });
});
