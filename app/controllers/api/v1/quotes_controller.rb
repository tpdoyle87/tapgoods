class Api::V1::QuotesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :update]

  def index
    quotes = Quote.all
    small = Quote.where("length < ?", 5)
    medium = Quote.where("length > ?", 4).where("length < ?", 13)
    large = Quote.where("length > ?", 12)
    render json: {
      small: small,
      medium: medium,
      large: large,
      quotes: quotes,
      user: current_user
    }
  end


  def update
    if current_user
      quote = Quote.find_by(id: params[:id])
      puts params
      like = Like.find_by(user_id: current_user.id, quote_id: quote.id)
      if like
        render json: {status: "error", code: 400, message: "You have already liked this quote"}
      else
        Like.create(user_id: current_user.id, quote_id: quote.id)
        quote.votes += 1
        quote.value += params[:value]
        quote.save
        render json: quote
      end
    end
  end
end
