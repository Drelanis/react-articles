import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as authCommands from './commands/auth';

Cypress.Commands.addAll(authCommands);
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);

export {};
