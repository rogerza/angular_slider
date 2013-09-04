class AngularController < ApplicationController
  respond_to :json
  after_filter :get_initial_date_values

  def index
    @date_range = { 'datemin' => 1980, "datemax" =>  2012 }
  end

  def get_initial_date_values
    # format.json { render :json => date_range }
    # respond_with @date_range.to_json
    # respond_to do |format|
    #   format.json { render json: @date_range }
    # end
  rescue => e
    puts "\n\nException:"
    puts e
  end

end
