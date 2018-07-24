class AuthenticationController < ApplicationController
 skip_before_action :authenticate_request

 def authenticate
   command = AuthenticateUser.call(params[:email], params[:password])
   @user = User.find_by(email: params[:email])
   if command.success?
     render json: { auth_token: command.result[:auth_token], user_id: command.result[:user_id], teacher_name: @user.name }
   else
     render json: { error: command.errors }, status: :unauthorized
   end
 end

end