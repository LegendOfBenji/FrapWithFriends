class Card
  attr_reader :value, :suit, :hidden 

  CARD_VALUES = (2..10).to_a + ['J', 'Q', 'K', 'A'] 
  SUITS = ['spades', 'clubs', 'hearts', 'diamonds']


  def initialize(value, suit)
    @value = value
    @suit = suit
    @hidden = true 
  end

  def suits 
    SUITS 
  end

  def card_values
    CARD_VALUES
  end

  
end

