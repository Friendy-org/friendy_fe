/**
 * '/posts/:postId' 형식의 경로를 숫자 ID를 매칭하는 정규식으로 변환합니다.
 */
export const pathToRegex = (path: string): RegExp => new RegExp(`^${path.replace(/:[^/]+/g, '\\d+')}$`);
