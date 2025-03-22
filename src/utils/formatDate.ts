export function formatRelativeTime(dateString: string): string {
  const now = new Date();
  const targetDate = new Date(dateString);
  const diffMs = now.getTime() - targetDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays >= 1) {
    return dateString.split('T')[0];
  }

  if (diffHours >= 1) {
    return `${diffHours}시간 전`;
  }

  if (diffMinutes >= 1) {
    return `${diffMinutes}분 전`;
  }

  return '방금 전';
}
