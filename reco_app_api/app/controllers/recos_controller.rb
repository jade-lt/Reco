class RecosController < ApplicationController
    def index
        render json: Reco.all
    end

    def create
        reco = Reco.create(category: params[:category], name: params[:name], cost: params[:cost], source: params[:source], description: params[:description])
        reco_valid = reco.valid?
        p reco
        p reco_valid
        if reco_valid
            render json: {message: 'Successfully created new recommendation!'}, status: 200
        else
            render json: {message: 'Unable to create new recommendation'}, status: 400
        end
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
