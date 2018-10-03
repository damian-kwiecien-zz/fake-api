


import * as yargs from 'yargs'
import { promisify } from 'util'
import * as fs from 'fs'
import * as express from 'express'
import { Argv } from './types/atgv';


class Main {
    async main() {
        const argv = this.readArgv()

    }

    private readArgv(): Argv {
        return yargs.argv
    }


}
