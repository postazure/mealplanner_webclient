require 'rails_helper'

describe 'User Login', js: true do
  it 'should require a login' do
    visit '/'
    expect(page).to have_content('APP')
  end

  it 'should foobar' do
    visit root_path
    expect(foobar).to eq false
  end
end