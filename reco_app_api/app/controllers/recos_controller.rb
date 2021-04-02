class RecosController < ApplicationController
    def index
        render json: { message: 'INDEX' }
    end

    def create
        render json: { message: 'CREATE' }
    end

    def show
        render json: { message: 'SHOW' }
    end

    def update
        render json: { message: 'UPDATE' }

    end

    def destroy
        render json: { message: 'DESTROY' }

    end


end
