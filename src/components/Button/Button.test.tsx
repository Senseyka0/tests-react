import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
	test("is button in document", () => {
		render(<Button>hello</Button>);

		expect(screen.getByText("hello")).toBeInTheDocument();
	});

	test("Primary theme", () => {
		render(<Button theme={ButtonTheme.PRIMARY}>Hello</Button>);

		expect(screen.getByText("Hello")).toHaveClass("primary");
	});

	test("Secondary theme", () => {
		render(<Button theme={ButtonTheme.SECONDARY}>Hello</Button>);

		expect(screen.getByText("Hello")).toHaveClass("secondary");
	});

	test("Error theme", () => {
		render(<Button theme={ButtonTheme.ERROR}>Hello</Button>);

		expect(screen.getByText("Hello")).toHaveClass("error");
	});

	test("Text theme", () => {
		render(<Button theme={ButtonTheme.TEXT}>Hello</Button>);

		expect(screen.getByText("Hello")).toHaveClass("text");
	});

	test("Icon theme", () => {
		render(<Button theme={ButtonTheme.ICON}>Hello</Button>);

		expect(screen.getByText("Hello")).toHaveClass("icon");
	});
});
