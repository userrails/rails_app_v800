require "ruby_llm"

RubyLLM.configure do |config|
  # Set keys for the providers you need. Using environment variables is best practice.
  # config.openai_api_key = ENV.fetch("OPENAI_API_KEY", nil)
  config.openai_api_key = Rails.application.credentials.OPENAI_API_KEY
  # Add other keys like config.anthropic_api_key if needed
end
