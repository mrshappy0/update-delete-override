class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json:  @user
    end

    def create
        @user = User.create(
            name: params[:name]
        )

        redirect_to "http://localhost:3001"
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy

        # render status: :no_content
        redirect_to "http://localhost:3001"
    end 

    def update
        @user = User.find(params[:id])
        @user.update(
            name: params[:name]
            # when using one param it can jsut be short params[:id]
        )
        # render json: @user, status: :accepted
        redirect_to "http://localhost:3001"
    end
end

