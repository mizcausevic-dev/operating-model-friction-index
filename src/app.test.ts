import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "./app.js";

describe("operating-model-friction-index app", () => {
  const app = createApp();

  it("serves the overview route", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Operating Model Friction Index");
  });

  it("serves the friction register route", async () => {
    const response = await request(app).get("/friction-register");
    expect(response.status).toBe(200);
  });

  it("serves the bottleneck tiers route", async () => {
    const response = await request(app).get("/bottleneck-tiers");
    expect(response.status).toBe(200);
  });

  it("serves the remediation posture route", async () => {
    const response = await request(app).get("/remediation-posture");
    expect(response.status).toBe(200);
  });

  it("serves the verification route", async () => {
    const response = await request(app).get("/verification");
    expect(response.status).toBe(200);
  });

  it("serves the docs route", async () => {
    const response = await request(app).get("/docs");
    expect(response.status).toBe(200);
  });

  it("serves the payload API", async () => {
    const response = await request(app).get("/api/payload");
    expect(response.status).toBe(200);
    expect(response.body.report.summary.systemsTracked).toBeGreaterThan(0);
  });

  it("serves the friction register API", async () => {
    const response = await request(app).get("/api/friction-register");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("serves the bottleneck tiers API", async () => {
    const response = await request(app).get("/api/bottleneck-tiers");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
