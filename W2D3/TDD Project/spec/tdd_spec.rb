require 'rspec'
require 'tdd'


describe Array do
  subject(:bob) {[1,2,1,-1,-2,3,3]} 

  describe "#my_uniq method" do
    it "element has dupes, remove them" do
      expect(bob.my_uniq).to eq([1, 2, -1, -2, 3])
    end
  end

  describe '#two_sum' do 
    it "finds all pairs of positions where the elements at those positions sum to zero" do 
      expect(bob.two_sum).to eq([[0, 3],[1, 4],[2, 3]])
    end
  end

  let(:grid) {[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]}

  describe '#my_transpose' do
    it 'flips the indices of the rows and columns' do
      expect(grid.transpose).to eq([
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ])
    end
  end

  let(:stocks) {[30, 50, 70, 100, 10]}
  describe "stock_picker" do
    it 'returns the indices of days most profitable to first buy and then sell stocks' do
      expect(stock_picker(stocks)).to eq([0, 3])
    end
  end

end