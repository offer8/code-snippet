import { AppLog } from "../app-log";
import { RpcCommon } from "@sap-devx/webview-rpc/out.ext/rpc-common";
const stripAnsi = require("strip-ansi");

export class ServerLog implements AppLog {
    private rpc: RpcCommon;
    private isOutputVisible: boolean = false;
    /**
     *
     */
    constructor(rpc : RpcCommon) {
        this.rpc = rpc;        
    }
    public log(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public writeln(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public create(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public force(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public conflict(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public identical(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public skip(str: string): void {
        this.rpc.invoke("log", [stripAnsi(str) + '\n']);
    }
    public showOutput(): boolean {
        this.isOutputVisible = !this.isOutputVisible;
        return !this.isOutputVisible;
    }
}