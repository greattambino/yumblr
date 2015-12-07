class StaticPagesController < ApplicationController
  def root
    @google = "https://maps.googleapis.com/maps/api/js?key=#{ENV['google_maps_key']}&libraries=geometry,places"
    render :root
  end
end
