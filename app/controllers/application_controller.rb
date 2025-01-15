class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  before_action :set_user_for_action_cable

  private

  def set_user_for_action_cable
    cookies.signed[:user_id] = Current.user&.id
  end
end
