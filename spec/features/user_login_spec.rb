require 'rails_helper'

describe 'User Login', js: true do
  it 'should require a login' do
    visit '/'
    expect(page).to have_content('APP')
  end

  it 'should not work' do
    expect(false).to be true
  end
end