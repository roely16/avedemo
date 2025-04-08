import Foundation
import SwiftData

@Model
class SecurityProtocol {
  var id: UUID
  var name: String
  
  init(name: String) {
    self.id = UUID()
    self.name = name
  }
}
