function FeedbackState({ message, tone = 'default' }) {
  return (
    <div className={tone === 'error' ? 'feedback feedback-error' : 'feedback'}>
      {message}
    </div>
  )
}

export default FeedbackState
