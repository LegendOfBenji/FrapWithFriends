require 'rspec'
require 'card'

class InvalidSuitError < StandardError; end


describe Card do
  subject(:card) { Card.new('J', 'hearts') }
  let(:bad_card) { Card.new('Z', 'brains') }

  describe "#initialize" do
    
    it "creates a card instance with a proper suit" do
      expect(card.suits).to include(card.suit)
    end

    it "creates a card instance with a proper value" do 
      expect(card.card_values).to include(card.value)
    end

    it "starts the card as hidden" do 
      expect(card.hidden).to be true 
    end


    context 'is invalid suit' do
      it 'throws an argument error' do
        expect { bad_card.suit }.to raise_error(InvalidSuitError)
      end
    end


  end



end
