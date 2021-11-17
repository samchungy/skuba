/**
 * Returns the name of the build as seen in GitHub status checks.
 *
 * This is driven off of environment variables and falls back to `Build`.
 */
export const buildNameFromEnvironment = (env = process.env): string => {
  if (env.BUILDKITE_BUILD_NUMBER) {
    return `Build #${env.BUILDKITE_BUILD_NUMBER}`;
  }

  if (env.GITHUB_RUN_NUMBER) {
    return `${env.GITHUB_WORKFLOW ?? 'Build'} #${env.GITHUB_RUN_NUMBER}`;
  }

  return 'Build';
};

/**
 * Whether GitHub API interactions should be enabled.
 *
 * This checks environment variables to see if the code is executing in a CI
 * environment and has access to a GitHub API token.
 */
export const enabledFromEnvironment = (env = process.env): boolean =>
  // Running in a CI environment.
  Boolean(env.BUILDKITE || env.CI || env.GITHUB_ACTIONS) &&
  // Has an API token at the ready.
  Boolean(env.GITHUB_API_TOKEN || env.GITHUB_TOKEN);