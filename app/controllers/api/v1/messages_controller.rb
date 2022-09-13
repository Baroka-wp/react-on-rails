class Api::V1::MessagesController < ApplicationController
  before_action :set_message, only: %i[show edit update destroy]

  # GET /messages
  # GET /messages.json
  def index
    @messages = Message.all.sample.content
    render json: @messages
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
    if @message
      render json: @message
    else
      render json: @message.errors
    end
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # GET /messages/1/edit
  def edit; end

  # POST /messages
  # POST /messages.json
  def create
    @message = Message.new(message_params)

    if @message.save
      render json: @message
    else
      render json: @message.errors
    end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update; end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message.destroy

    render json: { notice: 'Message was successfully removed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_message
    @message = Message.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def message_params
    params.permit(:content)
  end
end
