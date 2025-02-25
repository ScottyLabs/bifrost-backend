package com.bifrost.resource.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "tracks")
class Track(
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  val id: UUID,

  @Column(nullable = false)
  var name: String,

  @Column(nullable = false)
  var description: String,

  @OneToMany(mappedBy = "track")
  var projects: MutableList<Project> = mutableListOf()
)
