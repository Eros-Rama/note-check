export type HashAlgorithm =
  | 'sha1'
  | 'sha256'
  | 'sha512'
  | 'shake128'
  | 'shake256'
  | 'md5'
  | 'base64'
  | 'base64url'
  | 'hex'
  | 'crc32';

export type BufferLike = ArrayBuffer | Buffer | string;

export interface HashedFile {
  filename: string;
  hash: string;
}

export interface VerifyResult {
  files: {
    filename: string;
    result: boolean;
  }[];
  success: boolean;
}
