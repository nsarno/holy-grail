class ApplicationController < ActionController::API

  def index
    head :ok
  end

  def status_for resource
    resource.valid? ? :ok : :unprocessable_entity 
  end

private
  def authenticate 
    begin
      token = request.headers['Authorization'].split(' ').last
      payload, header = AuthToken.valid?(token)
      @current_user = User.find_by(id: payload['user_id'])
    rescue
      head :unauthorized  
    end
  end

  helper_method :authenticate
end

