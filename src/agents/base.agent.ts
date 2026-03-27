/**
 * BaseAgent
 *
 * All 50 Forge agents extend this class.
 * Provides shared context access, LLM calling, and debate participation.
 */

export interface AgentConfig {
  role: string;
  domain: string;
  expertise: string[];
  communicationStyle: string;
  decisionFramework: string;
}

export abstract class BaseAgent {
  constructor(
    protected readonly config: AgentConfig,
    protected readonly sharedContext: Record<string, unknown>
  ) {}

  abstract respond(prompt: string): Promise<string>;
  abstract challenge(proposal: string): Promise<string | null>;
  abstract synthesize(proposals: string[]): Promise<string>;

  get role(): string {
    return this.config.role;
  }
}
