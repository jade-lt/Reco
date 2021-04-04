class Api::RecosController < ApplicationController
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
        puts params[:id]
        render json: Reco.find(params[:id])
    end

    def update
        reco = Reco.find(params[:id])
        reco.update(category: params[:category], name: params[:name], cost: params[:cost], source: params[:source], description: params[:description])
        render json: {type: 'Successfully updated recommendation!'}
    end

    def destroy
        Reco.destroy(params[:id])
        render json: {message: 'Successfully deleted recommendation!'}
    end


end
