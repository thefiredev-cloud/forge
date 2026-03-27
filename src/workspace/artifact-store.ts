/**
 * ArtifactStore
 *
 * Manages versioned project outputs. All agents read/write here.
 * Backed by S3-compatible object storage.
 */

export type ArtifactType = 'code' | 'document' | 'design' | 'contract' | 'financial-model';

export interface Artifact {
  id: string;
  projectId: string;
  type: ArtifactType;
  path: string;
  content: string;
  version: number;
  createdBy: string; // agent role
  createdAt: Date;
}

export class ArtifactStore {
  async write(artifact: Omit<Artifact, 'id' | 'version' | 'createdAt'>): Promise<Artifact> {
    // TODO: versioned write to object storage
    throw new Error('Not implemented');
  }

  async read(projectId: string, path: string): Promise<Artifact | null> {
    // TODO: read latest version of artifact
    throw new Error('Not implemented');
  }

  async list(projectId: string): Promise<Artifact[]> {
    // TODO: list all artifacts for a project
    throw new Error('Not implemented');
  }
}
