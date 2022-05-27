class AuthenticationController < ApplicationController

    skip_before_action :authorize, only: :login
    
    def login
        

                user = User.find_by!(name: params[:username])


                if user&.authenticate(params[:password])

            # If User authenticates, make JWT and render Welcome Message with "status: :ok"
                    payload = { user_id: @user.id }
                    secret = 'secret'
                    token = JWT.encode payload, secret
                    render json: {token: token}, status: :ok 
                    # render json: {user: "Welcome to Mutts Cutts!"}, status: :ok 

                else
            # If User does not authenticate, render "Invalid Password or Username" with "status: :unprocessable_entity"
                    render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end
end