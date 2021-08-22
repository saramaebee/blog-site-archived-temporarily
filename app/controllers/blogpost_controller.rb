# frozen_string_literal: true

# class comment
class BlogpostController < ApplicationController
  def index
    @blogposts = Blogpost.all
    render json: @blogposts
  end

  def show
    @blogpost = Blogpost.find(params[:title])
    render json: @blogpost
  end

  def create
    @blogpost = Blogpost.create(
      title: params[:title],
      content: params[:content],
      tags: params[:tags]
    )
    render json: @blogpost
  end

  def update
    @blogpost = Blogpost.find(params[:id])
    @blogpost.update(
      title: params[:title],
      content: params[:content],
      tags: params[:tags]
    )
    render json: @blogpost
  end

  def destroy
    @blogposts = Blogpost.all
    @blogpost = Blogpost.find(params[:id])
    @blogpost.destroy
    render json: @blogposts
  end
end
