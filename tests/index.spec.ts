import { bigAdd, bigSub, bigMul, bigDiv, bigCompare } from "../src/index";

describe("计算函数测试", () => {
  test("是否正确相加", () => {
    expect(bigAdd("123.788", "78345.22123458")).toBe("78469.00923458");
  });

  test("是否正确相减", () => {
    expect(bigSub("123.788", "78345.22123458")).toBe("-78221.43323458");
  });

  test("是否正确相乘", () => {
    expect(bigMul("123.788", "78345.22123458")).toBe("9698198.2461861890400000");
  });

  test("是否正确相除", () => {
    expect(bigDiv("123.788", "78345.22123458")).toBe("0.0015800325539876");
  });

  test("是否正确保留精度", () => {
    expect(bigDiv("123.788", "78345.22123458", 8)).toBe("0.00158003");
  });

  test("是否相等", () => {
    expect(bigCompare("123123.999", "123123.999", "===")).toBe(true);
  });

  test("是否小于", () => {
    expect(bigCompare("12312.999", "123123.999", "<")).toBe(true);
  });

  test("是否大于", () => {
    expect(bigCompare("9123123.999", "123123.999", ">")).toBe(true);
  });

  test("是否小于等于", () => {
    expect(bigCompare("12312.999", "123123.999", "<=")).toBe(true);
  });

  test("是否大于等于", () => {
    expect(bigCompare("9123123.999", "123123.999", ">=")).toBe(true);
  });
});
